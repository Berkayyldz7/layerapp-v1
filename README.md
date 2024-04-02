# GENEL BİLGİLER

1. Bu uygulama; klasör mimarisinin iyileştirilmesi maksadıyla yazılmış küçük bir web uygulamasıdır.

2. Uygulama; CRUD işlemlerinden "Create" ve "Read" operasyonlarını içerecek şekilde yazılmış ve genel maksat klasör yapısıdır.

3. Uygulama nodejs ve mongodb servisleri kullanılarak yazılmıştır.


## UYGULAMA KULLANIMI

1. Uygulamayı kullanmak için bilgisayırınızda docker ve nodejs yüklü olması gerekir.

2. Öncelikle DB bağlantısı docker üzerinden sağlanır.
- docker compose up

3. Proje dizininde .env dosyası oluşturulur. Ayarları readme.txt içerisinden kullanlabilir.

4. Daha sonra node uygulaması ayağa kaldırılır.
- npm start

5. Uygulama tarayıcınızda; https://localhost:3000/api/v2 adresinde, create ve read operasyonlarına açık hale gelecektir.

6. Create operasyonları için postman kullanılması önerilir.

   
