export default function BookAppointment() {
    return (
        <section className="w-full bg-[#EDE8E0] py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20">
            <div className="max-w-[800px] mx-auto text-center">
                {/* Title */}
                <h2
                    className="mb-6 text-[#2C3E50] font-medium"
                    style={{
                        fontFamily: 'var(--font-gopher)',
                        fontSize: '52.864px',
                    }}
                >
                    Book an appointment.
                </h2>

                {/* Description */}
                <p
                    className="mb-16 text-[#2C3E50]"
                    style={{
                        fontFamily: 'var(--font-gopher)',
                        fontSize: '19.6864px',
                        lineHeight: '1.6'
                    }}
                >
                    Add some text here if you like, and add your scheduling widget below (you can get one by signing up for a scheduling account through Squarespace, the top-tier plan is HIPAA compliant OR you can use your client portal).
                </p>

                {/* Scheduling Widget Placeholder */}
                <div className="bg-white p-8 md:p-12 shadow-lg rounded-2xl max-w-[500px] mx-auto">
                    <p
                        className="text-[#2C3E50] font-medium mb-4"
                        style={{
                            fontFamily: 'var(--font-gopher)',
                            fontSize: '20px',
                        }}
                    >
                        This page is not active
                    </p>
                    <p
                        className="text-[#2C3E50]/70 mb-6"
                        style={{
                            fontFamily: 'var(--font-gopher)',
                            fontSize: '14px',
                            lineHeight: '1.6'
                        }}
                    >
                        If you're the owner, please log into your account to start a free trial or subscribe.
                    </p>
                    <button
                        className="px-6 py-3 bg-[#2C3E50] text-white tracking-wide font-medium rounded-lg hover:bg-[#3D4F5F] transition-all duration-500 ease-out"
                        style={{
                            fontFamily: 'var(--font-gopher)',
                            fontSize: '14.1568px',
                        }}
                    >
                        GO TO ACCOUNT
                    </button>
                </div>
            </div>
        </section>
    );
}
