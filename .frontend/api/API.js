const API_URL_LOCAL = process.env.API_URL_LOCAL;

/**
 *
 * @param {JSON} message_data
 * @param {String} signed_message
 * @param {String} signer_address
 */
async function connect_signer(message_data, signed_message, signer_address) {
    const abortController = new AbortController();

    try {
        const headersList = {
            Accept: "*/*",
            "Content-Type": "application/json",
        };

        const bodyContent = JSON.stringify({
            data: {
                message_data: {
                    date: message_data.date,
                    address: message_data.address,
                },
                signed_message: signed_message,
                signer_address: signer_address,
            },
        });

        const response = await fetch(`${API_URL_LOCAL}/client_connect/create`, {
            method: "POST",
            body: bodyContent,
            headers: headersList,
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        abortController.abort(error);
    }
}

module.exports = {
    connect_signer,
};
