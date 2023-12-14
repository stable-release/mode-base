const client_connections_service = require("./client_connections.service");
const { verify_message } = require("../../util/verify_message");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// Validation
const VALID_PROPERTIES = [
    "message_data",
    "signed_message",
    "signer_address"
];

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

async function signer_exists(req, res, next) {
    const { message_data, signed_message, signer_address } = req.body.data;
    const { signer_id } = client_connections_service.read(signer_address)
}

/**
 * Receives JSON message, signed message, connection address
 * Checks and verifies message contents
 * Returns 200 if successful
 */
async function create_signature(req, res, next) {
    const { message_contents, signed_message, connection_address } = req.body.data;
    
}

/**
 * TODO: If already wallet exists, then just update the information
 */


module.exports = {
    // new signature
    create: [

    ],
    // verify signature
    read: [

    ]
}