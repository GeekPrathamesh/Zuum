import Message from "../models/MessageModel.js";
import User from "../models/Usermodel.js";

//get the all users
export const getUsers = async (req, res) => {
  try {
    const userId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password"
    );
    // count messages that not seen
    const unseenMessages = {};
    const promises = filteredUsers.map(async (user) => {
      const messages = await Message.find({senderId:user._id,receiverId:userId,seen:false});
      if(messages.length>0){
        unseenMessages[user._id]=messages.length;
      }
    });
    await Promise.all(promises);
    res.json({success:true,users:filteredUsers,unseenMessages})
  } catch (error) {
    console.log(error.message);

        res.json({success:false,message:error.message})

  }
};
// get all messages of selected user
export const getMessagesselecteduser=async(req,res)=>{
    try {
        const {id:selectedId}=req.params;
        const myId = req.user._id;
        const messages = await Message.find({
            $or:[{sendorId:myId,receiverId:selectedId},
                {sendorId:selectedId,receiverId:myId},

            ]
        })

        await Message.updateMany({sendorId:selectedId,receiverId:myId},{seen:true});
        res.json({success:true,messages})
    } catch (error) {
            console.log(error.message);

        res.json({success:false,message:error.message})
    }
}

// api to make message as seen while chatting
export const markMessageseen=async(req,res)=>{
    try {
        const {id}=req.params;
        await Message.findByIdAndUpdate(id,{seen:true});
        res.json({success:true,})
    } catch (error) {
                    console.log(error.message);

        res.json({success:false,message:error.message})
    }
}
