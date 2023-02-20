interface ITakePhoto
{
    takePhoto();
}
class BasePhone
{
    call()
    {
        console.log("arama yapıldı.")
    }
}
class iPhone12 extends BasePhone implements ITakePhoto
{
    takePhoto(): void {
        console.log("Fotoğraf çekildi.")
    }
}
class Nokia extends BasePhone 
{
    takePhoto(): void {
        throw new Error("fotoğraf çekme özelliği yok");
    }
}
let phone:BasePhone;
phone = new iPhone12();
phone.call();
if (phone instanceof iPhone12) {
    (phone as iPhone12).takePhoto();
}

phone = new Nokia();
phone.call();
