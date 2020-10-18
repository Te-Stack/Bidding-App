 
const dataCollection = (() =>{
    var Shoe = function(id,comment,amount,items){
        this.id= id
        this.comment = comment
        this.amount= amount
        this.items = items

    }
    var Bag = function(id,comment,amount,items){
        this.id= id
        this.comment = comment
        this.amount= amount
        this.items = items

    }
    var Cloth = function(id,comment,amount,items){
        this.id= id
        this.comment = comment
        this.amount= amount
        this.items = items

    }
    var Phone =function(id,comment,amount,items){
        this.id= id
        this.comment = comment
        this.amount= amount
        this.items = items
    }

    
    var storedData = {
        allEntry:{
            Shoes: [],
            Bags: [],
            Clothes:[],
            Phones:[]
        }
    }

    
    return {
        addData: function(tType,descr,val,item) {
             var newData 
             var ID 

             if(storedData.allEntry[tType].length > 0){
                 ID = storedData.allEntry[tType][storedData.allEntry[tType].length - 1].id + 1
             }else{
                 ID = 0
             }

             if(tType === "Shoes"){
                newData = new Shoe(ID, descr, val,item)
             }else if(tType === "Bags"){
                 newData = new Bag(ID, descr , val,item)
             }
             else if(tType === "Clothes"){
                 newData = new Cloth(ID,descr,val,item)
             }
             else if(tType === "Phones"){
                 newData = new Phone(ID, descr, val,item)
             }

             storedData.allEntry[tType].push(newData)
             return newData
        },
        test:function(){
            console.log(storedData)
        }
    }



})()



const classCollection = (() =>{
    var classlinks
    classlinks ={
        commodity:".commodity",
        number:".number",
        amount:".amount",
        comment:".comment",
        button:".but",
        shoedata:".shoedata",
        bagdata:".bagdata",
        clothdata:".clothdata",
        phonedata:".phonedata"
    }

    return {
        input: () =>{
            return {
                commodity:document.querySelector(classlinks.commodity).value,
                number:document.querySelector(classlinks.number).value,
                amount:document.querySelector(classlinks.amount).value,
                comment:document.querySelector(classlinks.comment).value
            }
        },
        selector:()=>{
            return classlinks
        },
        addData:(obj,commodity)=>{
            var ourHTML,ourNewHTML,element,htmlObject
            if(commodity === "Shoes"){
                element = classlinks.shoedata

                ourHTML = '<div class="container"><div class="row"><div class="col-md-2"><h2><strong>Shoes</strong></h2></div><div class="col-md-10"> <div class="details"><span> Number of Items:%item%</span> <span>Bidding Amount:$%amount%</span> <span> Comments:%comment%</span></div></div></div></div>'
            }
            else if(commodity === "Bags"){
                element = classlinks.bagdata
                ourHTML = '<div class="container"><div class="row"><div class="col-md-2"><h2><strong>Bags</strong></h2></div><div class="col-md-10"> <div class="details"><span> Number of Items:%item%</span> <span>Bidding Amount:$%amount%</span> <span> Comments:%comment%</span></div></div></div></div>'
            }
            else if(commodity === "Clothes"){
                element = classlinks.clothdata
                ourHTML = '<div class="container"><div class="row"><div class="col-md-2"><h2><strong>Clothes</strong></h2></div><div class="col-md-10"> <div class="details"><span> Number of Items:%item%</span> <span>Bidding Amount:$%amount%</span> <span> Comments:%comment%</span></div></div></div></div>'
            }
            else if(commodity === "Phones"){
                element = classlinks.phonedata
                ourHTML = '<div class="container"><div class="row"><div class="col-md-2"><h2><strong>Phones</strong></h2></div><div class="col-md-10"> <div class="details"><span> Number of Items:%item%</span> <span>Bidding Amount:$%amount%</span> <span> Comments:%comment%</span></div></div></div></div>'
            }

            ourNewHTML = ourHTML.replace("%item%",obj.items)
            ourNewHTML = ourNewHTML.replace("%amount%",obj.amount)
            ourNewHTML = ourNewHTML.replace("%comment%",obj.comment)

            htmlObject = document.createElement("div")
            htmlObject.innerHTML = ourNewHTML
            document.querySelector(element).insertAdjacentElement("beforeend",htmlObject)

        }

        
        }
})()

var  globalCollection
globalCollection = ((data,link) =>{
     var addBalance
     addBalance = ()=>{
         var output = link.input()
        var newest = data.addData(output.commodity,output.comment,output.amount,output.number)   
        link.addData(newest,output.commodity)


        
     }

    const event = ()=>{
        var domlinks = link.selector()

        var but = document.querySelector(domlinks.button).addEventListener("click",(e)=>{
            e.preventDefault()
            addBalance()
        })

        var keyEvent = document.addEventListener("keypress",(e)=>{
            if(e.keyCode === 13 || e.which === 13){
                addBalance()
            }   
        })
    }

    return {
        init:()=>{
            event()

        }
    }


})(dataCollection,classCollection)

globalCollection.init()
