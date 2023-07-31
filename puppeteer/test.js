const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#role', 'jobseeker');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#homeButton',{timeout:3000});
      console.log('TESTCASE:FE_login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#userHomeButton',{timeout:3000});
      await page.click('#userHomeButton');
      await page.waitForSelector('#userGrid1',{timeout:3000});
      await page.click('#userGrid1');
      await page.waitForSelector('#applyButton',{timeout:3000});
      await page.click('#logout');
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_userHomeOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_userHomeOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#userAppliedJobs',{timeout:3000});
    await page.click('#userAppliedJobs');
    await page.waitForSelector('#AppliedGrid1',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_userJobOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_userJobOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#addOpenings',{timeout:3000});
    await page.click('#addOpenings');
    await page.waitForSelector('#searchButton',{timeout:3000});
    await page.click('#appliedCandidates');
    await page.waitForSelector('#candidatesGrid1',{timeout:3000});
    console.log('TESTCASE:FE_customerOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_customerOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-adaeebfaeacfddbabccaafbedddce.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#AdminOpenings',{timeout:3000});
    await page.click('#AdminOpenings');
    await page.waitForSelector('#adminOpeningGrid1',{timeout:3000});
    await page.click('#AdminCandidates');
    await page.waitForSelector('#adminCandidatesGrid1',{timeout:3000});
    console.log('TESTCASE:FE_adminOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_adminOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();