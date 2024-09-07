# Vanguard SSH Key Endpoint

## Retrieve SSH Public Key

Retrieve the public SSH key for the Vanguard instance. This key can be used for SSH authentication when connecting to remote servers.

**GET** `/api/vanguard/ssh-key`

### Prerequisites

- An SSH key pair must be generated for the Vanguard instance before this endpoint can be accessed.
- The token must have the ability to create remote servers (`create-remote-servers`) to view this endpoint.

### Response

```json
{
  "public_key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDZ7WdpbT8kvo/3eWr80kZVEIOcTzhqEaBiwQYObK79MVmf5YEnm8/mK6Ag2OdSM6dQO/qm5PEJigcNRa1ufNbVEHw6/0RupCYt3HIHm4LpoG9eExlZ9hyNDx5lY/OT3V+f0cx8kC+Pc9SE3EgzIxGzlNjUVyWTtIStnP5ew8VxmTS1JDnVB0Nkn6YGEeXQbPzhxRkSRHNQBDYWlUDQB+vxcXrVvYX6VnsOh7i1zioN2keKCltuBXSRnWVnBHMoeTN32xcDvdP+jiD8wIOqbg0vxjrX3dMlT30ENfyCsw6vloTfEHy9u5Q186KTXh/HAJSCl1K87OdPOotOSSX0pzcVQhKa9aYWvSDReaCi2tOsYsMzD9bF5TiMeRIoP4hWLd/ufBPjRrxv0XHEm2x5bHV6Tf6KYJaIsvfGupt7iNX6x4/C9XrrrMId88BRs5fT2tTYgxWImtAq9Nf9tcwhaGEIOg1kg1GVMX9TM0fY6iF0cWFcx3M1o0augD/oa4GOK4YKClOza/6mTBUJL57AQFefwaGOKOA4XhNay2U4xIzDjnFIWgOsCpeO4pfF1xVLNoDzJ4+6y4lTrdJeC+se8rmKwBKujw969d8GWje3apxqsALVsVc/blADImHcoax+0RxOqxtUUE2qXHdM/qMbEmFPKI7ncVt3RWZlGE9j9mbqaQ== worker@vanguard.test"
}
```

### Usage Note

This public key should be added to the `~/.ssh/authorized_keys` file on any remote server you wish to connect to using Vanguard. The exact method for adding the key may vary depending on your server setup and security policies.

## Error Responses

In case of errors, the API will return a JSON response with an error message:

```json
{
  "error": "Forbidden",
  "message": "You do not have the necessary permissions to access this resource"
}
```

or

```json
{
  "error": "Not Found",
  "message": "SSH key has not been generated for this Vanguard instance"
}
```

## Notes

- Ensure that an SSH key pair has been generated for your Vanguard instance before attempting to access this endpoint.
- Only users with the `create-remote-servers` ability can access this endpoint.
- The public key is used to establish secure connections between Vanguard and remote servers. Keep the corresponding private key secure and do not share it.