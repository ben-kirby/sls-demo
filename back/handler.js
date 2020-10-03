'use strict';

module.exports.hello = async event => {
	const response = {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		body: `Hello ${new Date}`,
		statusCode: 200,
	};

  return response;
};
