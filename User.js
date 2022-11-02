
var textarea =  document.getElementById("value")

textarea.addEventListener('keyup',()=>{
    document.getElementById('character_calc').innerHTML = ""
    var text_value = document.getElementById("value");
    var trim_value = text_value.value.trim().split(" ").join("");
    var ori = trim_value;
    var ori_len = trim_value.length;
    var totlen = trim_value.length;
    var chararr = trim_value.split("");
    console.log(chararr)
    var charlen
    for(let i=0;i<chararr.length;i++)
    {
        ori = ori.replaceAll(chararr[i],'');
        console.log(ori)
        charlen = ori_len - ori.length;
        ori_len = ori.length;
        if(charlen == 0)
        {
            console.log(charlen);
        }
        else
        {
            if(document.getElementById('character_calc').innerHTML == "")
            {
                document.getElementById('character_calc').innerHTML = "<p> The length in the text is " + totlen +"</p>"+"<p> The "+chararr[i]+ " length in the text is " + charlen +"</p>"
            }
            else
            {
                document.getElementById('character_calc').innerHTML+= "<p> The "+chararr[i]+ " length in the text is " + charlen +"</p>"
            }
        }
    }
})

