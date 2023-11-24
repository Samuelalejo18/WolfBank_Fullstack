const User = require("../models/user.js");
//const movement = require("../models/movements.js");
const bcrypt = require("bcrypt");
;
const deposit = async (req, res) => {
    try {
      const { identificationCard, balance, password } = req.body;
      const userFound = await User.findOne({ identificationCard });
      if (!userFound)
      return res.status(400).json({
        message: ["❌ The user does not exist"],
      });

      
      const matchedPassword = await bcrypt.compare(password, userFound.password);
      if (!matchedPassword) {
        return res.status(400).json({
          message: [" ❌ The password is incorrect"],
        });
      }
      userFound.balance += balance;
      await userFound.save();
/*
      const movement = new movement({
       Name: userFound.name,
       lastName: userFound.lastName,
       amount: balance,
       balanceAfterTransaction: userFound.balance,
       transactionType: 'deposit',
    });
    await movement.save();

*/
      res.json({ message: "Transfer successful", newBalance: userFound.balance });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  const withdraw = async (req, res) => {
    try {
      const { identificationCard, balance, password } = req.body;
      const userFound = await User.findOne({ identificationCard });
      const matchedPassword = await bcrypt.compare(password, userFound.password);
      if (!userFound)
      return res.status(400).json({
        message: ["❌ The user does not exist"],
      });
      if (!matchedPassword) {
        return res.status(400).json({
          message: [" ❌ The password is incorrect"],
        });
      }
      const userBalance =  await User.findOne({ balance });
      

    if (userBalance >= balance) {
      return res.status(400).json({
        message: [" ❌ Failed withdrawal, insufficient balance"],
      });
    }

      userFound.balance -= balance;
      await userFound.save();
      /*
      const movement = new movement({
          Name: userFound.name,
          lastName: userFound.lastName,
          amount: balance,
          balanceAfterTransaction: userFound.balance,
          transactionType: 'withdraw',
       });
       await movement.save();
*/
      res.json({
        message: "Withdrawal successful",
        newBalance: userFound.balance,
      });
  


    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  
  const transfer = async (req, res) => {
    try {
      const { authenticatedUser, recipientUser, balance, password } = req.body;
      const userFoundAuth = await User.findOne({ identificationCard: authenticatedUser });
      if (!userFoundAuth)
        return res.status(400).json({
          message: ["❌ The user does not exist"],
        });
      
        const userFoundRecipient = await User.findOne({ identificationCard: recipientUser });
      if (!userFoundRecipient)
        return res.status(400).json({
          message: ["❌ The user does not exist"],
        });
  
        const matchedPassword = await bcrypt.compare(password, userFoundAuth.password);
        if (!matchedPassword) {
          return res.status(400).json({
            message: [" ❌ The password is incorrect"],
          });
        }
      
        
       if (userFoundAuth.balance >= balance) {
        return res.status(400).json({
          message: [ "Failed transfer, insufficient balance"],
        });
      }
    
      userFoundAuth.balance -= balance;
        userFoundRecipient.balance +=balance;
        await  userFoundAuth.save();
        await userFoundRecipient.save();
/*
        const movement = new movement({
            Name: userFoundAuth.name,
            lastName: userFoundAuth.lastName,

            amount: balance,
            balanceAfterTransaction: userFoundAuth.balance,
            transactionType: 'transfer',
         });
         await movement.save();

*/
        res.json({
          message: "Transfer successful",
          newBalance: userFoundAuth.balance,
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };

 /* const getMovements= async (req, res) => {
    try {
      const allMovements= await movement.find();
      res.status(200).json(allMovements)
    }catch(error){
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
  
  }
*/
  module.exports = {

    deposit,
    withdraw,
    transfer,
   /* getMovements*/
  };
  