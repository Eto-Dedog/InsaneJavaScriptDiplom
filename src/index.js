import phoneList from './modules/phoneList'
import headerMenu from './modules/headerMenu'
import scroll from './modules/scroll'
import openAllServices from './modules/openAllServices'
import phoneMask from './modules/phoneMask'
import openPrivacy from './modules/openPrivacy'
import openСonsultation from './modules/openСonsultation'
import accordeon from './modules/accordeon'
import formulaSlider from './modules/formulaSlider'
import repairSlider from './modules/repairSlider'
import portfolioSlider from './modules/portfolioSlider'
import functionPortfolioSlider from './modules/functionPortfolioSlider'
import transparencySlider from './modules/transparencySlider'
import functionTransparency from './modules/functionTransparency'
import reviewsSlider from './modules/reviewsSlider'
import sendForm from './modules/sendForm'
import loadData from './modules/loadData'
import autorization from './modules/autorization'
import modalAdd from './modules/modalAdd'

var url = window.location.href;
if(url.indexOf('http://insanejavascriptdiplom') != url.indexOf('http://insanejavascriptdiplom/admin')) {
phoneList()
headerMenu()
scroll()
openAllServices()
phoneMask()
openPrivacy()
openСonsultation()
accordeon()
formulaSlider()
repairSlider()
portfolioSlider()
functionPortfolioSlider()
transparencySlider()
functionTransparency()
reviewsSlider()
sendForm()
loadData()
} else {
    if (url.indexOf('http://insanejavascriptdiplom/admin') != url.indexOf('http://insanejavascriptdiplom/admin/table.html')) {
        autorization()
    } else {
        modalAdd()
    }
}