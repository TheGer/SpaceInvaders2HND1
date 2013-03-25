#pragma strict

var laserSlot:Rigidbody;
static var score:int;

function OnGUI()
{
	GUI.color = Color.green;
	GUI.Label(Rect(0,0,100,25),"Score: "+score);
}


function Start () {

}

function Update () {
	BorderController.EnableBorders(this.transform);
	transform.Translate(Vector3.right * 15 * Input.GetAxis("Horizontal") * Time.deltaTime);
	//shoot the laser
	if(Input.GetKeyDown(KeyCode.Space))
	{
		Instantiate(laserSlot,transform.position,transform.rotation);
	}
}