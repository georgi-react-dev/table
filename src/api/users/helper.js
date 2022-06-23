export const transformUsers = (users) => {
    return users.map((user) => {
      
      return { ...user, companyName: user.company.name, link:[user.name, `/user/${user.id}`] };
    });
  };