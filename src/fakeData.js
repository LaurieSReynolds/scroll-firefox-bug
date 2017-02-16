import faker from 'faker';

const getRecords = (count) => {
  const records = [];
  for (let i = 0; i < count; i++) {
    const personInfo = {
      name: faker.name.findName(),
      company: faker.company.companyName(),
      country: faker.address.country(),
      id: 100 + i
    }
    records.push(personInfo);
  }
  const columns = ['name', 'company', 'country'];
  return {
    records,
    columns
  }
}

export default getRecords;
