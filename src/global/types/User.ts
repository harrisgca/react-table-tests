export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  geo: {
    lat: string;
    long: string;
  };
  phone: '1-770-736-8031 x56442';
  website: 'hildegard.org';
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
