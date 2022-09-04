import Menu from './menu';
import Footer from './footer';
export default function Layout({children}){

return(
<div>
<Menu />
{children}
<Footer />
</div>

)

}