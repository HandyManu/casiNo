const clientsController = {};

import clientsModel from '../models/clients.js';    

//select
clientsController.getClients = async (req, res) => {
    const clients = await clientsModel.find();
    res.json(clients);
};

//insert
clientsController.createClient = async (req, res) => {
    const {nombreCompleto, correoElectronico, contraseña , edad , paisResidencia} = req.body;
    const newClient = new clientsModel({nombreCompleto, correoElectronico, contraseña , edad , paisResidencia});
    await newClient.save();
    res.json({message: 'Client created successfully'});
};

//delete
clientsController.deleteClient = async (req, res) => {
    await clientsModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Client deleted successfully'});
};

//update
clientsController.updateClient = async (req, res) => {
    const {nombreCompleto, correoElectronico, contraseña , edad , paisResidencia} = req.body;
    const updatedClient = await clientsModel.findByIdAndUpdate(
        req.params.id,
        {nombreCompleto, correoElectronico, contraseña , edad , paisResidencia},
        {new: true}
    );
    res.json({message: 'Client updated successfully', updatedClient});
};

export default clientsController;