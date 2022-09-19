function doLetItBe(includeComma)
{
    if (includeComma)
    {
        return ' let it be,';
    }
    else
    {
        return ' let it be';
    }   
}

function generateLetItBes(amountOfRepeats)
{
    let result = '';

    for (i = 1; i <= amountOfRepeats; i++)
    {
        result = result + doLetItBe(true);
    }

    return result;
}

function sing()
{
    let songLetter = 'let it be,';

    songLetter = songLetter + generateLetItBes(3);

    songLetter = songLetter + " whisper words of wisdom,";

    songLetter = songLetter + generateLetItBes(5);

    songLetter = songLetter + " there will be an answer,";

    songLetter = songLetter + doLetItBe(false);

    return songLetter;
}

//Your code above ^^^
console.log(sing());