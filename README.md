## Running Locally

 requires Node.js v18.17+.

```bash
git clone https://github.com/Saifurrahmanemon/saifur.me.git
cd saifur.me
npm run i
npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/Saifurrahmanemon/saifur.me/blob/master/.env.example).

## View Counter

To enhance the accuracy of our view counter, we employ Redis to prevent a single user from increasing the count multiple times within a specified period, which is currently set at 24 hours.

## License

1. You are free to use this code.
2. It is appreciated if you give credit to the original author.