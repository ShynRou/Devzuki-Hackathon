export const registerProfileRoute = (router) => {
  router.get("/profile", (request, response, next) => {
    return response.json({
      address: request.query.address,
    });
  });
};
