import closeIcon from '../../assets/icons/close-icon.svg';

interface IntegrityPolicyProps {
  setShowIntegrityPolicy: Function;
}

const IntegrityPolicy: React.FC<IntegrityPolicyProps> = props => {
  return (
    <>
    <section className="w-full">
      <h2 className="text-left pb-8">Integritetspolicy</h2>
      <div className="flex flex-col gap-3 text-xs text-left pb-8">
        <p>Användaravtal och Sekretesspolicy för SUBUD </p>
        <p>Senast uppdaterad: 6/9-23 </p>
        <p>Välkommen till SUBUD! Vi är glada över att du har valt att använda vår app. Innan du fortsätter, ber vi dig att läsa noggrant igenom detta användaravtal och sekretesspolicy.</p> 
        <p>Användaravtal:</p>
        <ol className="list-decimal pl-2.5">
          <li>
          Acceptans av villkor:
          Genom att använda SUBBUD godkänner du att följa detta användaravtal och
          alla tillämpliga lagar och förordningar. Om du inte accepterar dessa
          villkor, vänligen sluta använda appen.
          </li>
          <li>Registrering: Vissa funktioner i appen kan kräva att du registrerar ett konto. Du ansvarar för att ge korrekt och aktuell information vid registreringen. Du är också ansvarig
          för att skydda ditt lösenord och kontot. </li>
          <li>Användarbeteende: Du samtycker till att inte använda appen för olagliga ändamål eller på ett sätt som stör appens funktionalitet eller andras användarupplevelse. Du får inte
          sprida skadlig kod eller försöka komma åt andras konton utan tillstånd.</li>
          <li>Äganderätt: SUBUD äger alla rättigheter till appen och dess innehåll. Du får inte kopiera, distribuera eller modifiera appen utan tillstånd.</li>
        </ol>
        <p>Sekretesspolicy:</p>
        <ol className="list-decimal pl-2.5">
          <li>Insamling av information: Vi samlar in viss information
          från dig när du använder appen, inklusive personuppgifter. Denna
          information används för att förbättra appen och anpassa din upplevelse.</li>
          <li>Delning av information: Vi delar inte din personliga information med tredje parter utan ditt samtycke, förutom när det krävs enligt lag.</li>
          <li>Säkerhet: Vi vidtar rimliga åtgärder för att skydda din information, men ingen säkerhet är absolut. Vi kan inte garantera att din information är helt skyddad från obehörig åtkomst.</li>
          <li>Ändringar i policyn: Denna sekretesspolicy kan ändras över tid. Vi meddelar dig om väsentliga ändringar.</li>
        </ol>
        <p>Genom att använda appen bekräftar du att du har läst och
          förstått detta användaravtal och sekretesspolicy. Om du har frågor eller
          oro, vänligen kontakta oss på [kontaktinformation].
        </p>
      </div>
      <div className='flex justify-center items-center gap-[7px]' onClick={() => props.setShowIntegrityPolicy(false)}>
        <p className='text-xs'>Close</p>
        <img className='w-2.5 h-2.5 dark:invert' src={closeIcon} alt="Icon of an X"></img>
      </div>
      </section>
    </>
  );
};

export default IntegrityPolicy;
