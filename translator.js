const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}

const selectTag = document.querySelectorAll("select"),
    translationBtn = document.querySelector("button"),
    fromText = document.querySelector(".from-text"),
    exchangeIcon = document.querySelector(".exchanges"),
    toText = document.querySelector(".to-text"),
    icons = document.querySelectorAll(".row i")

selectTag.forEach((tag, id) => {
    for (const country_code in countries) {
        // selecting the default language to be english and converting it to kannada
        let selected = id == 0 ? country_code == "en-GB" ? "selected" : "" : country_code == "hi-IN" ? "selected" : "";

        // if(id==0 && country_code=="en-GB"){
        //     selected="selected";
        // }else if(id==1 && country_code=="kn-IN"){
        //     selected="selected";
        // }
        // console.log(countries[country_code])
        
        let options = `<option value="${country_code}">${countries[country_code]}</options>`;
        tag.insertAdjacentHTML("beforeend", options)
    }
})

exchangeIcon.addEventListener("click", () => {
    let tempText = fromText.value,
        tempLang = selectTag[1].value;
    selectTag[1].value = selectTag[0].value;
    selectTag[0].value = tempLang;
    fromText.value = toText.value;
    toText.value = tempText;
})

translationBtn.addEventListener("click", () => {

    let text = fromText.value;
    let translateFrom = selectTag[0].value;
    let translateTo = selectTag[1].value;
    if(!text){
        return ;
    }
    toText.setAttribute("placeholder","Converting the text please wait !!!")
    // console.log(translateFrom,translateTo)
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // fetching an api responce and returning it with parsing into js object
    // and in the another then method receiving the another object

// in the first then we just parse the www.... but inthe second then the body part of the responce which had been in first then is been parsed .


    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        console.log(data);
    })
})

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {

        if (target.classList.contains("fa-copy")) {
            if (target.id == "from") {
                // console.log("from copy button clicked ");
// inorder to write the contents into the clipboard 
             navigator.clipboard.writeText(fromText.value);
            } else {
                // console.log("to copy button clicked ");
                navigator.clipboard.writeText(toText.value);
            }
        }else{
            let voice;
            if (target.id == "from") {
                // console.log("from speech button clicked ");
                voice =new SpeechSynthesisUtterance(fromText.value);
                voice.lang=selectTag[0].value;
            } else {
                console.log("to speech button clicked ");
                voice =new SpeechSynthesisUtterance(toText.value);
                voice.lang=selectTag[1].value;
                
            }

            speechSynthesis.speak(voice);

        }

    })
})


