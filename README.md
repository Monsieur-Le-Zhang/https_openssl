# https_openssl
the process to generate the certificate and the private key:

1. To generate a private key, you’ll need OpenSSL, which will already be installed on your system if you installed Node:
openssl genrsa 1024 > key.pem

2. Unlike a private key, a certificate can be shared with the world;
it contains a public key and information about the certificate holder,
The private key is used to create the certificate:
openssl req -x509 -new -key key.pem > key-cert.pem

