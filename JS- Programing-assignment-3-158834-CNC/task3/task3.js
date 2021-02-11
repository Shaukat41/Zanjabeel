var text = "World War II spans from 1939 to 1945";
        var firstChar = text.indexOf("World War II");
        if (firstChar == 0) {
        text = `${text.slice(firstChar, 0)}The Second World War${text.slice(12)}`;
        console.log(text);
        }