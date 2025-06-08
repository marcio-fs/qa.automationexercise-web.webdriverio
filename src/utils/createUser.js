// function createFakerUser() {
    
//     const userName = `TestUser${timestamp}`;
//     const userEmail = `testuser${timestamp}@example.com`;

//     return {
//         userName,
//         userEmail
//     };
// }

// module.exports = createFakerUser;




const createFakerUser = () => ({
  userName: `TestUser${Date.now()}`,
  userEmail: `testuser${Date.now()}@example.com`
});

module.exports = createFakerUser;
