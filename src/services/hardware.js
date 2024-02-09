import JSON from '../mocks/harwareocs.json'

export function HardwareOSC(){

  // PRIMERO CREARE UN OBJECT MAPENADO EL JSON 

  const hardware = JSON.map((item) => {
    return {
      name: item.OSNAME,
    }
  })
  
  const hardware2 = hardware.reduce((acc, item) => {
    const found = acc.find(({name}) => name === item.name);
    if (found) {
      found.count++;
    } else {
      acc.push({name: item.name, count: 1});
    }
    return acc;
  }, [])

  return hardware2
}