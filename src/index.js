const fs = require("fs/promises");
const fileName = "myfile.txt";
const updateFile = async (fileName, fileContent) => {
  // write code here
  // dont change function name
   try{
    const updated=await fs.appendFile(fileName,fileContent,"Newton School, An online learning platform");
    console.log(updated);
    return updated;
  }catch(error){
      console.log(`error in update a file ${error.message}`);
      return null;
  }
};

module.exports = updateFile;
