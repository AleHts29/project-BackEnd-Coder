import dotenv from "dotenv";
dotenv.config();

export default {
  fileSystem: {
    path: "./src/data",
  },
  mongodb: {
    cnxStr: process.env.MONGO_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: "service_account",
    project_id: "ecomerce-backend-coderhuse",
    private_key_id: "9950bb87f6db020e31fbddf47f5d39554e2f1e8e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDCbhE66+IQPsNH\nz1rU+gylz08FNPhTh8gnMHj6ed63/z4dEZ5Hjw++bcBEgnk86PC5ggGseO3F2jo5\nvTW3NAnZsGeA0aZkD1rBi91JLyU+lvasxhJQCdXC1IithpTKWL7OYy1d5SQf4kGJ\nU3PmxKqqBA00llRUKz4v/FXuUFpCr138qDzwwZYNwMRreGJf4LQnX0FfrDPM5e82\n1wp3WWBe3pMAVNqy33+AkrseSfdF82MJF2eCIgL0f8vMTkuSSnpkUOr8+W0hf2Xs\nvUx0VzsZ1HVS/bg1p2gpK+26737w/A0WkwHRk5ClYmEsH8CCRcfdxdTOfylOEvSs\nV8kTelj7AgMBAAECggEAGKHW11GnZWp7gAoCQRrgEP5MzbqSaWFkQf7EnOsQBIc2\n6Ho2b2zC+wZZhknHWqhM8xudjasRE0YHUWWqEVNA744x7A042NK51e0bya1KOSiU\nCNCGj72nPL8uBQSYrh1Z0w5CjZ49mjfRGLj0upGY6OA0MhYyNIBOqR1StQCuEWYr\nAvt3Slw1JdmGNMssJxgNMFEgfdavOh4rrcO/bVsSN6182OSE068oZ/3/LWy6prCb\nuGlsF5G9sHSga8r446aUcE4Q+qWRxo7WyxVEpK3ogN1OEk2VlO+YDbyZptIbQqUk\nUAUqrNTXcFqPg3iIRydw4/avx5pgLqA5bbSVH3BK1QKBgQD7NJETg5LKZN1lI+NM\nff6+43o0PPtKDznEbcSDNl7SLzGoB25cQMywjqF8UNwA8c6IozHH+1Z6kE5yAvdI\n2bPtoUeKJtRjOjkYed1jQUEw9ZBdj6moV0tpnWgVdlaAJlbB+1phoh4RyyPta5nf\nHL4+n8S63snwKWdn8UD4zfMAXwKBgQDGJBYLHjb8jxDERektt9yIdcxZjkgxQOZ5\nIjpSjqrTFbfY6w4vOC9twq24prIyt6IxAHKGJW9pY1XLN8aybwRH/NPX+8UAfDWL\nWRtVktC7ZX0O+Ok6zs8dPXnFttNMNdLcSb+kUnq74U9REbrqYj5/MZI2uF0Aa8io\nzmkjLjN85QKBgQCGLNy0nJmCS3/JrvKQf9fao+w5DL14IEvNtIe7QgZBo/2U72su\nEVqDj5uHqDTquD2F1A0Z8RCO5JdR5G2q1sV5TqTEkNruqUGn5ievBULJ4NAceUi4\nZvAb2Hyowg2P42qBsDzlW09OV7+357pHZrXjAzl0St13ztWxujXm7zI1ZwKBgQCS\nZ82l73B/05J3BJVUg7u/VRNmxPxQ8Hyb2w+vOt28VRrgfGahu2lIOAY3H20ijo+Y\nl5UHzBdzjsOxAgiehetq6cT6nX0ma6EA0xmgdHgpT8dFTeS/4FonZ+pXjky4zjh9\nLz0cxRkNRGFgLLKpR2iYgV9hcX6+teWx3brQFO5UhQKBgQDUBraA+XKDM0K00hRV\nPy+saNfCDVWICVOfYm/vohyrV/LuRg9Jawbp+B7xgizyO9Id3oj2eMugQgZw/uOz\nFocPkzXXlvpcB4q/EOec9LRIplG1fDlppU/PeannSx6HlAmRaOy67AUxr4aDJdrG\nmWKWVNVpSfrcn9f4UKvjyWqMQg==\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-dw1p8@ecomerce-backend-coderhuse.iam.gserviceaccount.com",
    client_id: "103241500745145086574",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-dw1p8%40ecomerce-backend-coderhuse.iam.gserviceaccount.com",
  },
  //   sqlite3: {
  //     client: "sqlite3",
  //     connection: {
  //       filename: `./DB/ecommerce.sqlite`,
  //     },
  //     useNullAsDefault: true,
  //   },
  //   mariaDb: {
  //     client: "mysql",
  //     connection: {
  //       host: "localhost",
  //       user: "coderhouse",
  //       password: "coderhouse",
  //       database: "coderhouse",
  //     },
  //   },
};
