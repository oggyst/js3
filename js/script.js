function run(max , min) 
{   
    const intNumberOfRows = document.getElementById('numberOfColumns').value;
    const intNumberOfColumns = document.getElementById('numberOfRows').value;
    if(intNumberOfRows == "" || intNumberOfColumns == "" )
    {
        alert('Please fill required fields.');
    } else if (intNumberOfRows < 1 || intNumberOfColumns < 1)
        alert('All numbers must be 1 or greater');
    else
        {
        let arrRowNumbers = [];
        let arrColumnNumbers = [];
        let arrMatrix = [[]];
        let intArrayAverage = 0;
        let intCounter;
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            arrRowNumbers[i] = (Math.floor(Math.random() * (max - min)) + min);
            intArrayAverage = intArrayAverage + arrRowNumbers[i];
            intCounter = 0;
        }
        intArrayAverage = intArrayAverage / arrRowNumbers.length;

        for (var i = 0; i < intNumberOfRows; i++) 
        {
            arrColumnNumbers [i] = (Math.floor(Math.random() * (max - intArrayAverage) + intArrayAverage));
        }
        for (var i = 0; i < intNumberOfColumns; i++) 
        {
            intArrayAverage=0;
            arrMatrix[i] = [];
            for (var j = 0; j < intNumberOfRows; j++)
            {
                arrMatrix [i][j] = arrRowNumbers[i] * arrColumnNumbers[j];
                if (arrMatrix[i][j] % 2 == 0)
                {
                    intCounter++;
                }
            }
            document.write('<p> '+ (i + 1) + '. row have ' + intCounter + ' even numbers</p>');
        }
    }
}