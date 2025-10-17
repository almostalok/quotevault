import quotes from '../data/quotes.json' with { type: 'json' };

//Get all quotes

export const getAllQuotes=(req,res)=>{
    res.json(quotes);
}

//get random quote

export const getRandomQuote=(req,res)=>{
    const random =quotes[Math.floor(Math.random()* quotes.length)];
    res.json(random)
}

//post a quote

export const addQuote=(req,res)=>{
    
    const{text,author}=req.body;
    
    if(!text || !author){
        return res.status(400).json({message:"text and author are required"})

    }

    const newQuote={id:quotes.length + 1,text,author};

    quotes.push(newQuote);

    res.status(201).json(newQuote);

};