const Cube = require('../models/Cube')

exports.getAll = async (search, from, to) => {
  let result = await Cube.find().lean()

  if (search) {
    result = result.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    result = result.filter((cube) => cube.difficultyLevel >= Number(from));
  }
  if (to) {
    result = result.filter((cube) => cube.difficultyLevel <= Number(to));
  }

  return result;
};

exports.getOneCube = (id) => Cube.findById(id).populate('accessories').lean();

exports.attach = async (cubeID,accesoryID)=>{
return Cube.findByIdAndUpdate(cubeID,{$push:{accessories:accesoryID}})
}

exports.createCube = async (cubeData) => {
const cube = new Cube(cubeData)
  await cube.save()
  return cube
};

exports.editCube = async (cubeID,data)=>{
  return await Cube.findByIdAndUpdate(cubeID,data)
}


exports.deleteCube =(cubeID)=>Cube.findByIdAndDelete(cubeID)