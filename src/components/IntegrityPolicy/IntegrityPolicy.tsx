
interface IntegrityPolicyProps{
    setShowIntegrityPolicy:Function;
}


const IntegrityPolicy:React.FC<IntegrityPolicyProps> = (props) => {

    return(
        <>
        <h1>Integritetspolicy</h1>
        <p>Användaravtal och Sekretesspolicy för SUBUD

Senast uppdaterad: 6/9-23

Välkommen till SUBUD! Vi är glada över att du har valt att använda vår app. Innan du fortsätter, ber vi dig att läsa noggrant igenom detta användaravtal och sekretesspolicy.

Användaravtal:

Acceptans av villkor: Genom att använda SUBBUD godkänner du att följa detta användaravtal och alla tillämpliga lagar och förordningar. Om du inte accepterar dessa villkor, vänligen sluta använda appen.
Registrering: Vissa funktioner i appen kan kräva att du registrerar ett konto. Du ansvarar för att ge korrekt och aktuell information vid registreringen. Du är också ansvarig för att skydda ditt lösenord och kontot.
Användarbeteende: Du samtycker till att inte använda appen för olagliga ändamål eller på ett sätt som stör appens funktionalitet eller andras användarupplevelse. Du får inte sprida skadlig kod eller försöka komma åt andras konton utan tillstånd.
Äganderätt: SUBUD äger alla rättigheter till appen och dess innehåll. Du får inte kopiera, distribuera eller modifiera appen utan tillstånd.

Sekretesspolicy:

Insamling av information: Vi samlar in viss information från dig när du använder appen, inklusive personuppgifter. Denna information används för att förbättra appen och anpassa din upplevelse.
Delning av information: Vi delar inte din personliga information med tredje parter utan ditt samtycke, förutom när det krävs enligt lag.
Säkerhet: Vi vidtar rimliga åtgärder för att skydda din information, men ingen säkerhet är absolut. Vi kan inte garantera att din information är helt skyddad från obehörig åtkomst.
Ändringar i policyn: Denna sekretesspolicy kan ändras över tid. Vi meddelar dig om väsentliga ändringar.

Genom att använda appen bekräftar du att du har läst och förstått detta användaravtal och sekretesspolicy. Om du har frågor eller oro, vänligen kontakta oss på [kontaktinformation].</p>
        <h2 onClick={() => props.setShowIntegrityPolicy(false)}>Close X</h2>
        </>
    )

}

export default IntegrityPolicy;