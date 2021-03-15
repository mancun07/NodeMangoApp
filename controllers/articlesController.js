const Article = require('../model/jacketsModel');

// @desc Get all transactions
// @route GET api/v1/transactions
// @access Public

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find();

        return res.status(200).json({
            success: true,
            count: articles.length,
            data: articles
        })
    }
   catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
   }
}


const getSingleArticle = async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        return res.status(200).json({
            success: true,
            data: article
        })
    }
   catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
   }
}

const addArticle = async (req, res) => {
    try {
         const newArticle = await Article.create(req.body)
        
       return res.status(201).json({
                   success: true,
                    data: newArticle
                })
            }
        
            catch (err) {
                return res.status(500).json({
                    success: false,
                    error: 'server error'
                })
           }
        
        }


// const addArticle = async (req, res) => {
//     try {
//         const newArticle = await Article.create(req.body)

//         return res.status(201).json({
//             success: true,
//             data: newArticle
//         })
//     }

//     catch(err) {
//         if(err.name === 'ValidationError')  {     
//             const messages = Object.values(err.errors).map(val => val.message);

//             return res.status(400).json({
//                 success: false,
//                 error: messages
//             })


//         } else {
//             return res.status(500).json({
//                 success: false,
//                 error: 'server error'
//             })
//         }

//     }
// }


module.exports = {
    getArticles,
    getSingleArticle,
    addArticle
}
