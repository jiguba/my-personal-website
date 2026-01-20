/**
 * CloudFront Function to add security headers to all responses
 * 
 * Deploy this function to CloudFront and associate it with your distribution's
 * viewer response event.
 * 
 * AWS Console Steps:
 * 1. Go to CloudFront > Functions
 * 2. Create function > Name it "security-headers"
 * 3. Copy this code into the function editor
 * 4. Publish the function
 * 5. Associate with your distribution's viewer response
 */

function handler(event) {
    var response = event.response;
    var headers = response.headers;

    // Content Security Policy - Prevents XSS attacks
    headers['content-security-policy'] = { 
        value: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';" 
    };

    // Prevent clickjacking attacks
    headers['x-frame-options'] = { value: 'DENY' };

    // Prevent MIME type sniffing
    headers['x-content-type-options'] = { value: 'nosniff' };

    // Referrer policy - Control information sent in Referer header
    headers['referrer-policy'] = { value: 'strict-origin-when-cross-origin' };

    // Permissions policy - Disable sensitive browser features
    headers['permissions-policy'] = { 
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' 
    };

    // XSS Protection (legacy, but good for older browsers)
    headers['x-xss-protection'] = { value: '1; mode=block' };

    // Strict Transport Security - Force HTTPS (only for production with SSL)
    headers['strict-transport-security'] = { 
        value: 'max-age=31536000; includeSubDomains; preload' 
    };

    return response;
}
