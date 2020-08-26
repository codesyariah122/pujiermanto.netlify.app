---
layout: post
title:  "integrasi bootstrap di ruby on rails"
author: puji
categories: [ Rails, bootstrap ]
image: /public/images/post/rails.jpg
tags: [rails]
opening: بسم الله الرحمن الرحيم
---  
![rails2]({{site.url}}/public/images/post/rails.jpg) 
menambahkan CSS di aplikasi rails kita. Framework seperti Rails menyediakan cara mengintegrasikan framework UI seperti Bootstrap tanpa harus men-setup secara manual. Caranya adalah seperti ini: 
1. Matikan server Rails yang sedang berjalan pada Terminal/console/command prompt dengan menekan "Ctrl+C"  

2. Buka file Gemfile (bukan Gemfile.lock) yang terdapat pada root direktori aplikasi web Rails kita dengan editor teks dan kemudian pada baris akhir tambahkan:  

### Gemfile
    {% highlight ruby %}
        gem 'jquery-rails'
        gem 'bootstrap', '~> 4.5.0'
    {% endhighlight %}  

3. Kembali ke Terminal/console/command prompt, masuk ke direktori aplikasi web kita dan jalankan perintah:  

{% highlight bash %}
gem install bootstrap -v 4.5.0
bundle install
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
{% endhighlight %}  

4. Buka file app/assets/stylesheets/application.scss dengan editor teks dan kemudian pada baris akhir tambahkan:  

### app/assets/stylesheets/application.scss
{% highlight css %}
@import 'bootstrap'
{% endhighlight %}  

5. Buka file app/assets/javascripts/application.js dengan editor teks dan kemudian pada baris akhir tambahkan:  

### app/assets/javascripts/application.js
{% highlight ruby %}
require("jquery3");
require("bootstrap");
require("pooper");
{% endhighlight %}  

6. Hidupkan kembali server Rails dengan perintah:  

{% highlight bash %}
rails s
{% endhighlight %}
Sebelum kita lihat efek perubahan halaman web kita dengan terinstallnya Bootstrap, mari kita ubah dulu kode di beberapa file views kita menjadi seperti berikut ini: 
buka root layout bootstrap nya yang berada di direktori ``` app/views/application.html.erb``` ( ini harus sesuai dengan view di controller kalian).
file ```application.html.erb```  
semua view html di controller kalian harus di render ke layout utama ini , dalam hal ini file view di controller tersebut kita masukkan ke dalam file views app/views/layouts/application.html.erb dengan menggunakan perintah render. Tanda underscore ditiadakan ketika kita meng-include "partial views" dengan perintah render.
{% highlight ruby %}
<!DOCTYPE html>
<html>
  <head>
    <title>PujiSite</title>
    <%= csrf_meta_tags %>
    <%= csp_meta_tag %>

    <%= stylesheet_link_tag 'application', media: 'all', 'data-turbolinks-track': 'reload' %>
    <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
  </head>

  <body>
    <%= render "layouts/main_menu" %>
    <%= yield %>
    <%= render "layouts/footer" %>
  </body>
</html>
{% endhighlight %}
 Apabila semua kode telah kita tuliskan dengan benar maka kita akan melihat hasil aplikasi web kita dan kita sudah bisa menggunakan class bootstrap untuk view layout kita.
