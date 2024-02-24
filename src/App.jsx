import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';

function App() {
  const [textToCopy, setTextToCopy] = useState(''); // The text you want to copy
  const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

  const onCopyText = () => {
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000); // Reset status after 2 seconds
  };


  return (
    <>
<textarea
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
        placeholder="Type or paste text here..."
      />
      <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      {copyStatus && <p>Text copied to clipboard!</p>}
          </>
  );
}

export default App;
