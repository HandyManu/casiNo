const gameController = {};

import gameModel from '../models/games.js';

//select 

gameController.getGames = async (req, res) => {
    const games = await gameModel.find();
    res.json(games);
}

//insert

gameController.createGame = async (req, res) => {
    const {nombre,categoria, apuestaMinima, apuestaMaxima} = req.body;
    const newGame = new gameModel({nombre,categoria, apuestaMinima, apuestaMaxima});
    await newGame.save();
    res.json({message: 'Game created successfully'});
}

//delete

gameController.deleteGame = async (req, res) => {
    await gameModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Game deleted successfully'});
}

//update

gameController.updateGame = async (req, res) => {
    const {nombre,categoria, apuestaMinima, apuestaMaxima} = req.body;
    const updatedGame = await gameModel.findByIdAndUpdate(
        req.params.id,
         {nombre,categoria, apuestaMinima, apuestaMaxima},
          {new: true}
        );
    res.json({message: 'Game updated successfully', updatedGame});
}

export default gameController;
