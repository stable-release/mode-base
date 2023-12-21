const client_connections_service = require("./client_connections.service");
const { verify_message } = require("../../util/verify_message");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Validation
const VALID_PROPERTIES = ["message_data", "signed_message", "signer_address"];

function hasProperties(...properties) {
    return function (req, res, next) {
        const { data = {} } = req.body;
        try {
            properties.forEach((property) => {
                const value = data[property];
                if (!value) {
                    const error = new Error(
                        `A ${property} property is required.`
                    );
                    error.status = 400;
                    throw error;
                }
            });
            next();
        } catch (error) {
            next(error);
        }
    };
}

function hasOnlyValidProperties(req, res, next) {
    const { data = {} } = req.body;

    const invalidFields = Object.keys(data).filter(
        (field) => !VALID_PROPERTIES.includes(field)
    );

    if (invalidFields.length)
        return next({
            status: 400,
            message: `Invalid field(s): ${invalidFields.join(", ")}`,
        });
    next();
}

/**
 * Receives JSON message, signed message, connection address
 * Checks if a connection exists
 * If a connection exists, then set signer_id, otherwise keep null
 */
async function signer_exists(req, res, next) {
    const { message_data, signed_message, signer_address } = req.body.data;

    const response = await client_connections_service.read(signer_address);

    const signer_id = response
        ? response.signer_id
            ? response.signer_id
            : null
        : null;

    res.locals.signer_id = null;
    res.locals.message_data = message_data;
    res.locals.signed_message = signed_message;
    res.locals.signer_address = signer_address;

    if (signer_id) {
        res.locals.signer_id = signer_id;
    }

    next();
}

/**
 * Checks and verifies signer data
 */
async function verify_message_contents(req, res, next) {
    // Verify the data before creating a session
    const verified = await verify_message(
        res.locals.message_data,
        res.locals.signed_message,
        res.locals.signer_address
    );

    if (!verified) {
        return next({
            status: 500,
            message: "Pattern not matching",
        });
    }

    next();
}

/**
 * Creates or overwrites a new signer entry
 * Returns 200 if successful
 */
async function create_signature(req, res, next) {
    if (res.locals.signer_id) {
        return next();
    }
    const { signer_address, signer_id } =
        await client_connections_service.create(
            res.locals.signer_address,
            res.locals.signed_message,
            res.locals.message_data
        );
    res.status(200).json({
        data: {
            signer_id: signer_id,
            signer_address: signer_address,
        },
    });
}

/**
 * Updates already existing signature
 */
async function update_signature(req, res, next) {
    const response = await client_connections_service.update(
        res.locals.signer_id,
        res.locals.signer_address,
        res.locals.signed_message,
        res.locals.message_data
    );

    const { signer_id, signer_address } = response[0];

    res.status(200).json({
        data: {
            signer_id: signer_id,
            signer_address: signer_address,
        },
    });
}

module.exports = {
    // new signature
    create: [
        hasProperties("message_data", "signed_message", "signer_address"),
        hasOnlyValidProperties,
        asyncErrorBoundary(signer_exists),
        asyncErrorBoundary(verify_message_contents),
        asyncErrorBoundary(create_signature),
        asyncErrorBoundary(update_signature),
    ],
    // verify signature
    read: [],
};
