const menu=document.querySelector('.menu');
const nav=document.querySelector('.navlinks');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const form=document.getElementById('bookingForm');
const msg=document.getElementById('formMessage');
form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=form.name.value.trim();
 msg.textContent=`Dziękujemy, ${name}! Twoje zapytanie zostało przyjęte. To demonstracyjny formularz projektu szkolnego.`;
 form.reset();
});
const arrival=document.querySelector('input[name="arrival"]');
const departure=document.querySelector('input[name="departure"]');
const today=new Date().toISOString().split('T')[0];
arrival.min=today; departure.min=today;
arrival.addEventListener('change',()=>departure.min=arrival.value);
