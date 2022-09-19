// Your code here:
function sing()
{
    var counter = 100;

    while (counter >= -1)
    {
        counter = counter - 1;

        if (counter > 0)
        {
            console.log(counter + ' bottles of milk on the wall, ' + counter + ' bottles of milk.');
            counter = counter - 1;
            console.log('Take one down and pass it around, ' + counter + ' bottles of milk on the wall.');
            console.log('');
            counter = counter + 1;
        }
        else
        {
            console.log('No more bottles of milk on the wall, no more bottles of milk.');
            console.log('Go to the store and buy some more, 99 bottles of milk on the wall.');
        }
    }
}

sing();