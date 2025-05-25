import { ApplicationLayer } from "../device/application-layer";
import { InfrastructureLayer } from "../device/infrastructure-layer";
import Jfdi from "../device/jfdi";
import { PipelineLayer } from "../device/pipeline-layer";
import Logo from "../logo/full";
import NavBar from "../nav/NavBar";
import TopBar from "../nav/TopBar";
import "./main.css";

export default function MainPage() {
  return (
    <div className="main-page">
      <TopBar />
      <div className="hero-container">
        <div className="hero">
          <Logo orientation={"horizontal"} />
          <div className="shrink">
            <h1>Welcome!</h1>
            <p>
              Get ready to <Jfdi />
              ...
            </p>
          </div>
          <NavBar />
        </div>
      </div>
      <div className="bois">
        <svg className="infrastructure no-clip big-boi">
          <InfrastructureLayer animateGlow={true} />
        </svg>
        <svg className="pipeline no-clip big-boi">
          <PipelineLayer animateGlow={true} />
        </svg>
        <svg className="application no-clip big-boi">
          <ApplicationLayer animateGlow={true} />
        </svg>
      </div>
      <div className="main-container">
        <div className="infrastructure-container">
          <section id="infrastructure" className="infrastructure explainer">
            <h2>Infrastructure</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              diam varius, mollis ligula nec, mattis nisl. In bibendum accumsan
              metus vitae tristique. Sed aliquam ac enim a fermentum. Vestibulum
              elit dui, suscipit quis varius ut, vulputate dictum felis. Aenean
              ac lectus a enim maximus varius quis in felis. Praesent aliquam
              ornare nibh eu venenatis. In hac habitasse platea dictumst. Cras
              faucibus pharetra ex. Morbi in libero nec risus rutrum tincidunt.
              Morbi euismod nisi id ultrices sodales. Maecenas a libero vitae mi
              condimentum suscipit vitae non est. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Nullam cursus urna in nisl aliquet suscipit. Curabitur eget
              rhoncus urna. Suspendisse sit amet nisl vel leo efficitur
              pellentesque. Pellentesque maximus lectus eu molestie fringilla.
              Ut quis vulputate velit. Vivamus congue neque arcu, et fringilla
              turpis scelerisque ullamcorper. Praesent libero magna, consequat
              id elit mollis, venenatis molestie diam. Sed sed augue volutpat,
              lacinia diam quis, lacinia arcu. Pellentesque ac mi nunc. Nam est
              velit, condimentum et justo in, mollis blandit massa. Phasellus ut
              neque sed libero efficitur lacinia. Maecenas at pretium dui. Etiam
              mattis erat massa, at fringilla metus ornare ac. Aliquam nec
              accumsan eros. Curabitur sodales lacus tellus, ut euismod tortor
              ultricies sit amet.
            </p>
            <p>
              Nam erat ipsum, malesuada vel mattis et, pretium eget augue.
              Aenean in malesuada justo. Sed convallis tincidunt feugiat. Sed
              interdum erat in luctus rutrum. Quisque ullamcorper venenatis
              ligula ut scelerisque. Pellentesque accumsan sodales diam, id
              dapibus tellus rhoncus eget. Etiam a consequat nibh. Duis sodales
              sem nec urna dapibus, id pharetra quam rhoncus.
            </p>
          </section>
        </div>
        <div className="pipeline-container">
          <section id="pipeline" className="pipeline explainer">
            <h2>Pipeline</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              diam varius, mollis ligula nec, mattis nisl. In bibendum accumsan
              metus vitae tristique. Sed aliquam ac enim a fermentum. Vestibulum
              elit dui, suscipit quis varius ut, vulputate dictum felis. Aenean
              ac lectus a enim maximus varius quis in felis. Praesent aliquam
              ornare nibh eu venenatis. In hac habitasse platea dictumst. Cras
              faucibus pharetra ex. Morbi in libero nec risus rutrum tincidunt.
              Morbi euismod nisi id ultrices sodales. Maecenas a libero vitae mi
              condimentum suscipit vitae non est. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Nullam cursus urna in nisl aliquet suscipit. Curabitur eget
              rhoncus urna. Suspendisse sit amet nisl vel leo efficitur
              pellentesque. Pellentesque maximus lectus eu molestie fringilla.
              Ut quis vulputate velit. Vivamus congue neque arcu, et fringilla
              turpis scelerisque ullamcorper. Praesent libero magna, consequat
              id elit mollis, venenatis molestie diam. Sed sed augue volutpat,
              lacinia diam quis, lacinia arcu. Pellentesque ac mi nunc. Nam est
              velit, condimentum et justo in, mollis blandit massa. Phasellus ut
              neque sed libero efficitur lacinia. Maecenas at pretium dui. Etiam
              mattis erat massa, at fringilla metus ornare ac. Aliquam nec
              accumsan eros. Curabitur sodales lacus tellus, ut euismod tortor
              ultricies sit amet.
            </p>
            <p>
              Nam erat ipsum, malesuada vel mattis et, pretium eget augue.
              Aenean in malesuada justo. Sed convallis tincidunt feugiat. Sed
              interdum erat in luctus rutrum. Quisque ullamcorper venenatis
              ligula ut scelerisque. Pellentesque accumsan sodales diam, id
              dapibus tellus rhoncus eget. Etiam a consequat nibh. Duis sodales
              sem nec urna dapibus, id pharetra quam rhoncus.
            </p>
          </section>
        </div>
        <div className="application-container">
          <section id="application" className="application explainer">
            <h2>Application</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed
              diam varius, mollis ligula nec, mattis nisl. In bibendum accumsan
              metus vitae tristique. Sed aliquam ac enim a fermentum. Vestibulum
              elit dui, suscipit quis varius ut, vulputate dictum felis. Aenean
              ac lectus a enim maximus varius quis in felis. Praesent aliquam
              ornare nibh eu venenatis. In hac habitasse platea dictumst. Cras
              faucibus pharetra ex. Morbi in libero nec risus rutrum tincidunt.
              Morbi euismod nisi id ultrices sodales. Maecenas a libero vitae mi
              condimentum suscipit vitae non est. Class aptent taciti sociosqu
              ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <p>
              Nullam cursus urna in nisl aliquet suscipit. Curabitur eget
              rhoncus urna. Suspendisse sit amet nisl vel leo efficitur
              pellentesque. Pellentesque maximus lectus eu molestie fringilla.
              Ut quis vulputate velit. Vivamus congue neque arcu, et fringilla
              turpis scelerisque ullamcorper. Praesent libero magna, consequat
              id elit mollis, venenatis molestie diam. Sed sed augue volutpat,
              lacinia diam quis, lacinia arcu. Pellentesque ac mi nunc. Nam est
              velit, condimentum et justo in, mollis blandit massa. Phasellus ut
              neque sed libero efficitur lacinia. Maecenas at pretium dui. Etiam
              mattis erat massa, at fringilla metus ornare ac. Aliquam nec
              accumsan eros. Curabitur sodales lacus tellus, ut euismod tortor
              ultricies sit amet.
            </p>
            <p>
              Nam erat ipsum, malesuada vel mattis et, pretium eget augue.
              Aenean in malesuada justo. Sed convallis tincidunt feugiat. Sed
              interdum erat in luctus rutrum. Quisque ullamcorper venenatis
              ligula ut scelerisque. Pellentesque accumsan sodales diam, id
              dapibus tellus rhoncus eget. Etiam a consequat nibh. Duis sodales
              sem nec urna dapibus, id pharetra quam rhoncus.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
