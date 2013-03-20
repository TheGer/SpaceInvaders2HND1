#pragma strict

var laserSlot:Rigidbody;


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