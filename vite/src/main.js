import './style.css'
 /*const userList = document.getElementById('user-list');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        users.forEach(user => {
          const li = document.createElement('li');

          const header = document.createElement('div');
          header.className = 'user-header';

          const name = document.createElement('span');
          name.textContent = user.name;

          const btnGroup = document.createElement('div');
          btnGroup.className = 'user-buttons';

          const emailBtn = document.createElement('button');
          emailBtn.textContent = 'E-mail';
          emailBtn.className = 'email-btn';

          const addressBtn = document.createElement('button');
          addressBtn.textContent = 'Address';
          addressBtn.className = 'address-btn';

          const emailInfo = document.createElement('p');
          emailInfo.className = 'info';
          emailInfo.style.display = 'none';
          emailInfo.textContent = `Email: ${user.email}`;

          const addressInfo = document.createElement('p');
          addressInfo.className = 'info';
          addressInfo.style.display = 'none';
          addressInfo.textContent = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

          emailBtn.addEventListener('click', () => {
            emailInfo.style.display = emailInfo.style.display === 'none' ? 'block' : 'none';
          });

          addressBtn.addEventListener('click', () => {
            addressInfo.style.display = addressInfo.style.display === 'none' ? 'block' : 'none';
          });

          btnGroup.appendChild(emailBtn);
          btnGroup.appendChild(addressBtn);

          header.appendChild(name);
          header.appendChild(btnGroup);

          li.appendChild(header);
          li.appendChild(emailInfo);
          li.appendChild(addressInfo);
          userList.appendChild(li);
        });
      })
      .catch((err) => {
        userList.innerHTML = '<li>Error loading users.</li>';
        console.error(err);
      });*/

     const ul = document.querySelector("ul");

    async function main() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();

      for (const user of users) {
        const userInstance = new User(user);
        userInstance.render(ul);
      }
    }

    class User {
      constructor({ name, email, address }) {
        this.name = name;
        this.email = email;
        this.address = address;
      }

      render(parent) {
        const li = document.createElement("li");

        const header = document.createElement("div");
        header.className = "user-header";

        const nameSpan = document.createElement("span");
        nameSpan.className = "user-name";
        nameSpan.textContent = this.name;

        const btnGroup = document.createElement("div");
        btnGroup.className = "buttons";

        const emailBtn = document.createElement("button");
        emailBtn.className = "email-btn";
        emailBtn.textContent = "E-mail";

        const addressBtn = document.createElement("button");
        addressBtn.className = "address-btn";
        addressBtn.textContent = "Address";

        const info = document.createElement("p");
        info.className = "info";

        emailBtn.addEventListener("click", () => {
          info.textContent = `📧 Email: ${this.email}`;
        });

        addressBtn.addEventListener("click", () => {
          const a = this.address;
          info.textContent = `🏠 Address: ${a.street}, ${a.suite}, ${a.city}, ${a.zipcode}`;
        });

        btnGroup.appendChild(emailBtn);
        btnGroup.appendChild(addressBtn);
        header.appendChild(nameSpan);
        header.appendChild(btnGroup);
        li.appendChild(header);
        li.appendChild(info);
        parent.appendChild(li);
      }
    }

    main();