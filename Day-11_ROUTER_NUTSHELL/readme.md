Router => app ka vo part hota hai jo decide krta hai ki given URL pe kya show hoga.

- React makes single page apllication mtlb url change hone pe kuch nhi hota tha.
- Recat-Router-DOM came to solve this problem.
----------------------------------------------------------------------------------------
Types of Router:-
1. BrowserRouter =>most common router. it uses html5 history api . keep url's clean. used most of the times in react.
Pro's:-Uses History API with HTML5, URL Clean , modern apps me use hota hai, Needs server configurations, Good SEO
Con's:- Deployment Complexity , Needs server support for client-side routes.

----------------------------------------------------------------------------------------
2. HashRouter =>
    -URL's contains hashes.(e.g. /courses/#/about)
    -Used in Older browser
    -No SEO
    -Ugly UI

----------------------------------------------------------------------------------------
3. MemoryRouter =>
    -Used in React Native.

----------------------------------------------------------------------------------------
4. Static Router =>
    -For server side rendering(SSR).

----------------------------------------------------------------------------------------

Routes- Container hai jiske andar sare route hote hain.
Route- if path is at courses then show courses component.

----------------------------------------------------------------------------------------
useNavigate => useNavigate ek react hook hai jiska use kar ke hum kisi bhi page pe navigate kar sakte hai without using Link or NavLink. Iska use hum button ke click event me kar sakte hai. Jaise ki upar diye gaye code me humne ek button banaya hai jiska click hone par user courses page pe navigate ho jayega.