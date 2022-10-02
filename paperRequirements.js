function paperRequirements(){
    const firstBookCopy = 5;
    const secondBookCopy = 3;
    const thirdBookCopy = 2;

    const firstBookPage = firstBookCopy * 100;
    const secondBookPage = secondBookCopy * 200;
    const thirdBookPage = thirdBookCopy * 300;

    const totalPage = firstBookPage + secondBookPage + thirdBookPage;
    return totalPage;
}

const totalPage = paperRequirements(100, 200, 300);
console.log('total page :', totalPage);