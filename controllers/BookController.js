const Book = require('../models/book');

// to get all the book 
module.exports.getallbooks = async function(req,res){

    try {
        
        let books = await Book.find({});

        // sending slot in query for PAGINATION
        if(books){

            if(req.query.slot){
                let limit = 10;
    
                if(req.query.slot <= 0 ){
                    return res.status(200).json({
                        message: books.slice(0, limit)
                    })
                }
    
                return res.status(200).json({
                    message: books.slice(limit*req.query.slot, limit*req.query.slot + limit)
                })
            }

            return res.status(200).json({
                message:books
            })
        }

        return res.status(404).json({
            message:"error while getting books"
        })

    
    } catch (error) {
        console.log(error);
    }
}




// to get a specific book from the store 
module.exports.getSpecificBook = async function(req,res){

    try {
        
        let specificBook = await Book.findOne({id:req.params.id});

        if(specificBook){
            return res.status(200).json({
                message:specificBook
            })
        }

        return res.status(404).json({
            message:"No Book Found by the given ID"
        })
    
    } catch (error) {
        return res.status(404).json({
            message:"No Book Found by the given ID"
        })
    }
}



// add a book to the store
module.exports.createBook = async function(req,res){

    try {

        let bookbyid = await Book.find({id:req.body.id});

        if(bookbyid.length > 0){
            return res.status(200).json({
                message:"There is alredy a book with same id"
            })
        }

        const book = await Book.create(req.body);
        
        if(book){
            return res.status(200).json({
                message:book
            })
        }

        return res.status(404).json({
            error:"Book not added"
        })
        
    } catch (error) {
        return res.status(404).json({
            error:"Book not added"
        })
    }
    
}


// deleting a book from the store
module.exports.deleteBook = async function(req,res){

    try {

        let deletedBook = await Book.findOneAndDelete({id:req.params.id});
    
        if(deletedBook){
            return res.status(200).json({
                message:'book deleted'
            })
        }

        return res.status(404).json({
            message:'book not found'
        })
        
    } catch (error) {
        return res.status(404).json({
            message:'book not found'
        })
    }
}


// updating the book
module.exports.updatingBook = async function(req,res){
    try {
        
        console.log(req.body);

        let UpdatedBook = await Book.findOneAndUpdate({id:req.params.id},req.body, {new:true});

        console.log(UpdatedBook);

        if(UpdatedBook){
            return res.status(200).json({
                message:UpdatedBook
            })
        }

        return res.status(404).json({
            message:'No book was found by the ID'
        })


    } catch (error) {
        return res.status(404).json({
            message:'No book was found by the ID'
        })
    }
}