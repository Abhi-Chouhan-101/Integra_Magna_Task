
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  const stored = localStorage.getItem('theme');
  if(stored){
    root.setAttribute('data-theme', stored);
    toggle.setAttribute('aria-pressed', stored === 'dark' ? 'true' : 'false');
  }

  function setTheme(theme){
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');

    document.body.style.transition = 'background-color 300ms ease, color 300ms ease';
  }

  function toggleTheme(){
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  toggle.addEventListener('click', toggleTheme);

  toggle.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      toggleTheme();
    }
  });

  document.addEventListener('keydown', function(e){
    if(e.key.toLowerCase() === 't' && (e.ctrlKey || e.metaKey) ){
      e.preventDefault();
      toggleTheme();
    }
  });
})();
