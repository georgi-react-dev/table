export const transformUsers = (users) => {
    return users.map((user) => {
      
      return { ...user, companyName: user.company.name, link:[user.name, `/user/${user._id}`] };

      //TODO
      // const userNameSlug = user.name.toLowerCase().replaceAll(' ', '-');
      // return { ...user, companyName: user.company.name, link:[user.name, `/user/${userNameSlug}`] };
    });
  };