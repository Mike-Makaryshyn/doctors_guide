import img1 from '../../../assets/bewegungall.png';
import img2 from '../../../assets/flexion.png';
import img3 from '../../../assets/rotation.png';
import img4 from '../../../assets/abduktion.png';
export default {
  path: "bewegungall",
  // http://localhost:5173/trafarette/bewegungall
  content: [
    {
      id: 1,
      title: "Anatomische Bewegungsbegriffe",

      childTabs: [
        //  Start of child tab 1
        {
          id: 3,
          title: "Anatomische Bewegungsbegriffe",
          textWithFormatting: `<div>
          <img src="${img1}" alt="bewegung" style="max-width: 60%; height: auto;">
            <p>Anatomische Bewegungsbegriffe werden verwendet, um die Aktionen der Muskeln am Skelett zu beschreiben. Muskeln ziehen sich zusammen, um Bewegungen an den Gelenken zu erzeugen, und diese Bewegungen können mithilfe dieser Terminologie genau beschrieben werden.</p>
            <p>Die Begriffe setzen voraus, dass der Körper in der anatomischen Grundstellung beginnt. Die meisten Bewegungen haben eine entgegengesetzte Bewegung – auch als antagonistische Bewegung bekannt. Um das Verständnis zu erleichtern, werden die Begriffe in antagonistischen Paaren beschrieben.</p>
          </div>`
        },
        {
          id: 4,
          title: "Flexion & Extension",
          textWithFormatting: `<div>
          <img src="${img2}" alt="flexion" style="max-width: 60%; height: auto;">
            <p>Flexion und Extension sind Bewegungen, die in der Sagittalebene stattfinden. Sie beschreiben das Vergrößern oder Verkleinern des Winkels zwischen zwei Körperteilen:</p>
            <ul>
              <li><strong>Flexion</strong> beschreibt eine Bewegung, bei der der Winkel zwischen zwei Körperteilen kleiner wird. Eine Flexion im Ellbogen verringert den Winkel zwischen der Ulna und dem Humerus. Bei einer Flexion im Knie bewegt sich der Knöchel in Richtung Gesäß, und der Winkel zwischen Femur und Tibia wird kleiner.</li>
              <li><strong>Extension</strong> beschreibt eine Bewegung, bei der der Winkel zwischen zwei Körperteilen größer wird. Eine Extension im Ellbogen vergrößert den Winkel zwischen der Ulna und dem Humerus. Bei der Extension im Knie wird die untere Extremität gestreckt.</li>
            </ul>
          </div>`
        },
        {
          id: 5,
          title: "Abduktion & Adduktion",
          textWithFormatting: `<div>
          <img src="${img4}" alt="abduktion" style="max-width: 60%; height: auto;">
            <p>Abduktion und Adduktion beschreiben Bewegungen, die vom Körper weg oder hin zur Körpermitte erfolgen:</p>
            <ul>
              <li><strong>Abduktion</strong> ist eine Bewegung weg von der Körpermitte – ähnlich wie das „Entführen“ (Abduction), also das Wegführen. Zum Beispiel hebt die Abduktion der Schulter die Arme seitlich vom Körper weg.</li>
              <li><strong>Adduktion</strong> ist eine Bewegung zur Körpermitte hin. Die Adduktion der Hüfte führt die Beine zusammen.</li>
            </ul>
            <p>Bei Fingern und Zehen wird nicht die Körpermitte, sondern die Mitte der Hand bzw. des Fußes als Bezugspunkt verwendet. Daher bedeutet das Abduzieren der Finger, sie auseinanderzuspreizen.</p>
          </div>`
        },
        {
          id: 6,
          title: "Mediale & Laterale Rotation",
          textWithFormatting: `<div>
          <img src="${img3}" alt="rotation" style="max-width: 60%; height: auto;">
            <p>Mediale und laterale Rotation beschreiben die Bewegung der Gliedmaßen um ihre Längsachse:</p>
            <ul>
              <li><strong>Mediale Rotation</strong> ist eine Drehbewegung zur Körpermitte hin und wird auch als Innenrotation bezeichnet. Zwei Szenarien veranschaulichen dies: Erstens, bei gestrecktem Bein wird der Fuß nach innen gedreht – das ist die mediale Rotation der Hüfte. Zweitens, stellen Sie sich vor, Sie tragen ein Tablett vor sich, mit einem im 90-Grad-Winkel gebeugten Ellbogen. Wenn Sie nun den Arm drehen, sodass die Hand in Richtung der gegenüberliegenden Hüfte zeigt (Ellbogen bleibt bei 90 Grad), handelt es sich um die Innenrotation der Schulter.</li>
              <li><strong>Laterale Rotation</strong> ist eine Drehbewegung von der Körpermitte weg, also in die entgegengesetzte Richtung der beschriebenen medialen Rotation.</li>
            </ul>
          </div>`
        },
        {
          "id": 7,
          "title": "Elevation & Depression",
          "textWithFormatting": `<div>
            <ul>
              <li><strong>Elevation</strong> bezeichnet eine Bewegung in eine obere Richtung, wie etwa das Hochziehen der Schultern (Schulterzucken).</li>
              <li><strong>Depression</strong> hingegen beschreibt eine Bewegung in eine untere Richtung, also das Senken der Schultern.</li>
            </ul>
          </div>`
        },
        {
          "id": 8,
          "title": "Dorsalflexion & Plantarflexion",
          "textWithFormatting": `<div>
            <p>Dorsalflexion und Plantarflexion beziehen sich auf Bewegungen im Sprunggelenk und die beiden Flächen des Fußes: die dorsale (obere) und die plantare (untere) Fläche.</p>
            <ul>
              <li><strong>Dorsalflexion</strong> beschreibt eine Beugung im Sprunggelenk, bei der der Fuß nach oben zeigt. Eine Dorsalflexion der Hand ist ein verwirrender Begriff, der selten verwendet wird. Da der Handrücken die dorsale Fläche der Hand ist, wird eine Bewegung in diese Richtung als Extension (Streckung) bezeichnet. Dorsalflexion des Handgelenks entspricht daher der Streckung.</li>
              <li><strong>Plantarflexion</strong> beschreibt eine Streckung im Sprunggelenk, bei der der Fuß nach unten zeigt. Der entsprechende Begriff für die Hand ist die Palmarflexion.</li>
            </ul>
          </div>`
        },
        {
          "id": 9,
          "title": "Inversion & Eversion",
          "textWithFormatting": `<div>
            <p>Inversion und Eversion sind Bewegungen, die im Sprunggelenk stattfinden und die Rotation des Fußes um seine Längsachse betreffen:</p>
            <ul>
              <li><strong>Inversion</strong> ist die Bewegung, bei der die Fußsohle zur Körpermitte hin zeigt, also medial ausgerichtet ist.</li>
              <li><strong>Eversion</strong> ist die Bewegung, bei der die Fußsohle von der Körpermitte wegzeigt, also lateral ausgerichtet ist.</li>
            </ul>
          </div>`
        },
        {
          "id": 10,
          "title": "Opposition & Reposition",
          "textWithFormatting": `<div>
            <p>Diese Bewegungen sind auf Menschen und einige Menschenaffen beschränkt und beziehen sich auf spezielle Handbewegungen:</p>
            <ul>
              <li><strong>Opposition</strong> bringt den Daumen und den kleinen Finger zusammen.</li>
              <li><strong>Reposition</strong> bewegt den Daumen und den kleinen Finger wieder voneinander weg und kehrt die Opposition um.</li>
            </ul>
          </div>`
        },
        {
          "id": 11,
          "title": "Zirkumduktion",
          "textWithFormatting": `<div>
          <img src="${img1}" alt="bewegung" style="max-width: 60%; height: auto;">
            <p>Zirkumduktion bezeichnet eine kreisförmige oder kegelförmige Bewegung eines Gliedes, das sich vom Gelenk ausgehend bewegt. Oft wird sie als kreisende Bewegung beschrieben, jedoch ist sie genauer als kegelförmig zu verstehen, da das bewegte Glied einen „Kegel“ bildet.</p>
          </div>`
        },
        {
          "id": 12,
          "title": "Protraktion & Retraktion",
          "textWithFormatting": `<div>
            <ul>
              <li><strong>Protraktion</strong> beschreibt die anterolaterale Bewegung des Schulterblatts entlang der Thoraxwand, wodurch die Schulter nach vorne bewegt wird – wie beim „Ausstrecken“ nach einem Gegenstand.</li>
              <li><strong>Retraktion</strong> ist die posteromediale Bewegung des Schulterblatts entlang der Thoraxwand, was die Schulter nach hinten bewegt – wie beim „Zurückziehen“, etwa beim Aufheben eines Gegenstands.</li>
            </ul>
          </div>`
        },

        //  End of child tab 2 (можна далі ще таби добавити якшо треба)
      ],
    },
    //  End of parent tab 1
    //  Start of parent tab 2

    //  End of parent tab 3
  ],
};
