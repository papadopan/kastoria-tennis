export const Footer = () => {
  return (
    <footer className="bg-green-600 p-10 flex justify-around flex-col md:flex-row gap-16">
      <div>
        <p>Ακαδημία Αντισφαίρισης &quot;Κελετρον&quot;</p>
        <p>Λεωφόρος Γουναράδων Ε.ΔΗ.ΚΑ</p>
        <p>Περιοχή Χλόη</p>
        <p>Καστοριά 52100 </p>
      </div>
      <div>
        <a
          className="text-green-800 hover:text-green-100"
          href="https://www.facebook.com/%CE%8C%CE%BC%CE%B9%CE%BB%CE%BF%CF%82-%CE%91%CE%BD%CF%84%CE%B9%CF%83%CF%86%CE%B1%CE%AF%CF%81%CE%B9%CF%83%CE%B7%CF%82-%CE%9A%CE%B1%CF%83%CF%84%CE%BF%CF%81%CE%B9%CE%AC%CF%82-%CE%9A%CE%B5%CE%BB%CE%B5%CF%84%CF%81%CE%BF%CE%BD-264654546890698"
          target="_blank"
        >
          <div className="flex">
            <svg width="30" height="30" className="mb-1 fill-current  mr-1">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <p>Facebook</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/oakeletron/"
          target="_blank"
          className="text-green-800 hover:text-green-100"
        >
          <div className="flex">
            <svg width="30" height="30" className="mb-1 fill-current   mr-1">
              <path d="M11.984 16.815c2.596 0 4.706-2.111 4.706-4.707 0-1.409-.623-2.674-1.606-3.538-.346-.303-.735-.556-1.158-.748-.593-.27-1.249-.421-1.941-.421s-1.349.151-1.941.421c-.424.194-.814.447-1.158.749-.985.864-1.608 2.129-1.608 3.538 0 2.595 2.112 4.706 4.706 4.706zm.016-8.184c1.921 0 3.479 1.557 3.479 3.478 0 1.921-1.558 3.479-3.479 3.479s-3.479-1.557-3.479-3.479c0-1.921 1.558-3.478 3.479-3.478zm5.223.369h6.777v10.278c0 2.608-2.114 4.722-4.722 4.722h-14.493c-2.608 0-4.785-2.114-4.785-4.722v-10.278h6.747c-.544.913-.872 1.969-.872 3.109 0 3.374 2.735 6.109 6.109 6.109s6.109-2.735 6.109-6.109c.001-1.14-.327-2.196-.87-3.109zm2.055-9h-12.278v5h-1v-5h-1v5h-1v-4.923c-.346.057-.682.143-1 .27v4.653h-1v-4.102c-1.202.857-2 2.246-2 3.824v3.278h7.473c1.167-1.282 2.798-2 4.511-2 1.722 0 3.351.725 4.511 2h7.505v-3.278c0-2.608-2.114-4.722-4.722-4.722zm2.722 5.265c0 .406-.333.735-.745.735h-2.511c-.411 0-.744-.329-.744-.735v-2.53c0-.406.333-.735.744-.735h2.511c.412 0 .745.329.745.735v2.53z" />
            </svg>
            <p>@oakeletron</p>
          </div>
        </a>
        <a
          href="mailto:oakeletron@gmail.com"
          className="text-green-800 hover:text-green-100"
        >
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="rgb(14,95,71)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <p>oakeletron@gmail.com</p>
          </div>
        </a>
      </div>
    </footer>
  );
};
