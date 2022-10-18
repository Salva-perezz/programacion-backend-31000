const Cupcake = use("App/Models/Cupcake");

class GetCupcakesController {
  async index({ view, request }) {
    const cupcakes = (await Cupcake.all()).toJSON();
    const params = request.get();
    console.log(params);
    return view.render("cupcakes", { cupcakes });
  }
}

module.exports = GetCupcakesController;
