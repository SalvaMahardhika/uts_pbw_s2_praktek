window.onload = function() {
    // Membuat elemen untuk notifikasi
    var notification = document.createElement('div');
    notification.setAttribute('class', 'notification');
    notification.textContent = 'Selamat datang';
    
    // Mengatur gaya notifikasi
    notification.style.backgroundColor = 'orange';
    notification.style.position = 'fixed';
    notification.style.bottom = '0';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.padding = '10px 20px';
    notification.style.color = 'white';
    notification.style.borderRadius = '5px';
    notification.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    notification.style.zIndex = '9999';
    
    // Menambahkan notifikasi ke dalam body
    document.body.appendChild(notification);
    
    // Menghapus notifikasi setelah 3 detik
    setTimeout(function() {
        notification.remove();
    }, 3000);
};
